"use client";

import { useEffect, useState, useCallback } from "react";
import { LeadStatus } from "@/models/Lead";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: LeadStatus;
  notes: string;
  source: string;
  createdAt: string;
}

// ── Config ────────────────────────────────────────────────────────────────────

const STATUS_OPTIONS: LeadStatus[] = [
  "new",
  "contacted",
  "in_progress",
  "closed",
];

const STATUS_STYLES: Record<LeadStatus, string> = {
  new:         "bg-blue-100 text-blue-700 border border-blue-200",
  contacted:   "bg-yellow-100 text-yellow-700 border border-yellow-200",
  in_progress: "bg-purple-100 text-purple-700 border border-purple-200",
  closed:      "bg-green-100 text-green-700 border border-green-200",
};

const STATUS_LABELS: Record<LeadStatus, string> = {
  new:         "New",
  contacted:   "Contacted",
  in_progress: "In Progress",
  closed:      "Closed",
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Per-row edit state: { [leadId]: { status, notes, saving, saved } }
  const [rowState, setRowState] = useState<
    Record<
      string,
      { status: LeadStatus; notes: string; saving: boolean; saved: boolean }
    >
  >({});

  // Filter state
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");

  // ── Fetch leads ──────────────────────────────────────────────────────────

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const url =
        filterStatus !== "all"
          ? `/api/leads?status=${filterStatus}&limit=200`
          : `/api/leads?limit=200`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");

      const data: { leads: Lead[] } = await res.json();

      setLeads(data.leads);

      // Initialise per-row edit state
      const initial: typeof rowState = {};
      data.leads.forEach((l) => {
        initial[l._id] = {
          status: l.status,
          notes: l.notes,
          saving: false,
          saved: false,
        };
      });
      setRowState(initial);
    } catch {
      setError("Failed to load leads. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [filterStatus]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // ── Per-row state helpers ────────────────────────────────────────────────

  const setRow = (
    id: string,
    patch: Partial<{ status: LeadStatus; notes: string; saving: boolean; saved: boolean }>
  ) =>
    setRowState((prev) => ({
      ...prev,
      [id]: { ...prev[id], ...patch },
    }));

  // ── Save a lead ──────────────────────────────────────────────────────────

  const saveLead = async (id: string) => {
    const row = rowState[id];
    if (!row) return;

    setRow(id, { saving: true, saved: false });

    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: row.status, notes: row.notes }),
      });

      if (!res.ok) throw new Error("Update failed");

      setRow(id, { saving: false, saved: true });

      // Update leads list so the status badge reflects immediately
      setLeads((prev) =>
        prev.map((l) =>
          l._id === id ? { ...l, status: row.status, notes: row.notes } : l
        )
      );

      setTimeout(() => setRow(id, { saved: false }), 2000);
    } catch {
      setRow(id, { saving: false });
      alert("Failed to save. Please try again.");
    }
  };

  // ── Delete a lead ────────────────────────────────────────────────────────

  const deleteLead = async (id: string, name: string) => {
    if (!confirm(`Delete lead from ${name}? This cannot be undone.`)) return;

    try {
      const res = await fetch(`/api/leads/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setLeads((prev) => prev.filter((l) => l._id !== id));
    } catch {
      alert("Failed to delete lead.");
    }
  };

  // ── Filtered view ────────────────────────────────────────────────────────

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase();
    return (
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      l.phone.includes(q) ||
      l.service.toLowerCase().includes(q)
    );
  });

  // ── Stats ────────────────────────────────────────────────────────────────

  const stats: Record<string, number> = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    in_progress: leads.filter((l) => l.status === "in_progress").length,
    closed: leads.filter((l) => l.status === "closed").length,
  };

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Top Bar ───────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-base">📋</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800 leading-tight">
                Lead Dashboard
              </h1>
              <p className="text-xs text-gray-500">Victor &amp; Co.</p>
            </div>
          </div>

          <button
            onClick={fetchLeads}
            className="text-sm text-green-700 border border-green-200 bg-green-50 px-4 py-2 rounded-lg hover:bg-green-100 transition font-medium"
          >
            ↻ Refresh
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8 space-y-6">
        {/* ── Stats Row ─────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Total", value: stats.total, color: "bg-gray-800 text-white" },
            { label: "New", value: stats.new, color: "bg-blue-600 text-white" },
            { label: "Contacted", value: stats.contacted, color: "bg-yellow-500 text-white" },
            { label: "In Progress", value: stats.in_progress, color: "bg-purple-600 text-white" },
            { label: "Closed", value: stats.closed, color: "bg-green-600 text-white" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-4"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${s.color}`}
              >
                {s.value}
              </div>
              <p className="text-sm text-gray-600 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Filters ───────────────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-wrap gap-4 items-center">
          {/* Search */}
          <input
            type="text"
            placeholder="Search name, email, phone, service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-72 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
          />

          {/* Status Filter */}
          <div className="flex flex-wrap gap-2">
            {["all", ...STATUS_OPTIONS].map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                  filterStatus === s
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:border-green-300"
                }`}
              >
                {s === "all" ? "All" : STATUS_LABELS[s as LeadStatus]}
              </button>
            ))}
          </div>

          <p className="ml-auto text-xs text-gray-400">
            {filtered.length} lead{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* ── Error ─────────────────────────────────────────────── */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm flex items-center gap-3">
            <span>❌</span> {error}
          </div>
        )}

        {/* ── Loading ───────────────────────────────────────────── */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-gray-500">Loading leads...</p>
            </div>
          </div>
        )}

        {/* ── Empty ─────────────────────────────────────────────── */}
        {!loading && filtered.length === 0 && !error && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-gray-500 font-medium">No leads found.</p>
            <p className="text-gray-400 text-sm mt-1">
              Try adjusting your filters or search term.
            </p>
          </div>
        )}

        {/* ── Table ─────────────────────────────────────────────── */}
        {!loading && filtered.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Desktop table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    {[
                      "Lead",
                      "Contact",
                      "Service",
                      "Date",
                      "Status",
                      "Notes",
                      "Actions",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-3.5 font-semibold text-gray-500 text-xs uppercase tracking-wide whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((lead) => {
                    const row = rowState[lead._id];
                    if (!row) return null;

                    const isDirty =
                      row.status !== lead.status || row.notes !== lead.notes;

                    return (
                      <tr
                        key={lead._id}
                        className="hover:bg-gray-50/60 transition-colors"
                      >
                        {/* Lead */}
                        <td className="px-5 py-4">
                          <p className="font-semibold text-gray-800">
                            {lead.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {lead.source}
                          </p>
                        </td>

                        {/* Contact */}
                        <td className="px-5 py-4">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-green-600 hover:underline block text-xs"
                          >
                            {lead.email}
                          </a>
                          <a
                            href={`tel:${lead.phone}`}
                            className="text-gray-600 text-xs mt-0.5 block"
                          >
                            {lead.phone}
                          </a>
                        </td>

                        {/* Service */}
                        <td className="px-5 py-4">
                          <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                            {lead.service || "—"}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="px-5 py-4 text-gray-500 text-xs whitespace-nowrap">
                          {formatDate(lead.createdAt)}
                        </td>

                        {/* Status Dropdown */}
                        <td className="px-5 py-4">
                          <select
                            value={row.status}
                            onChange={(e) =>
                              setRow(lead._id, {
                                status: e.target.value as LeadStatus,
                              })
                            }
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold outline-none cursor-pointer transition ${
                              STATUS_STYLES[row.status]
                            }`}
                          >
                            {STATUS_OPTIONS.map((s) => (
                              <option key={s} value={s}>
                                {STATUS_LABELS[s]}
                              </option>
                            ))}
                          </select>
                        </td>

                        {/* Notes */}
                        <td className="px-5 py-4">
                          <input
                            type="text"
                            value={row.notes}
                            onChange={(e) =>
                              setRow(lead._id, { notes: e.target.value })
                            }
                            placeholder="Add notes..."
                            className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs w-44 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-100 transition"
                          />
                        </td>

                        {/* Actions */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => saveLead(lead._id)}
                              disabled={row.saving || !isDirty}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                                row.saved
                                  ? "bg-green-100 text-green-700 border border-green-200"
                                  : isDirty
                                  ? "bg-green-600 text-white hover:bg-green-700"
                                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
                              }`}
                            >
                              {row.saving
                                ? "Saving..."
                                : row.saved
                                ? "✓ Saved"
                                : "Save"}
                            </button>

                            <button
                              onClick={() => deleteLead(lead._id, lead.name)}
                              className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-red-200 text-red-600 hover:bg-red-50 transition"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards (visible below md) */}
            <div className="md:hidden divide-y divide-gray-100">
              {filtered.map((lead) => {
                const row = rowState[lead._id];
                if (!row) return null;
                const isDirty =
                  row.status !== lead.status || row.notes !== lead.notes;

                return (
                  <div key={lead._id} className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {lead.name}
                        </p>
                        <a
                          href={`tel:${lead.phone}`}
                          className="text-sm text-green-600"
                        >
                          {lead.phone}
                        </a>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          STATUS_STYLES[lead.status]
                        }`}
                      >
                        {STATUS_LABELS[lead.status]}
                      </span>
                    </div>

                    <div className="flex gap-3 text-xs text-gray-500">
                      <span>{lead.service}</span>
                      <span>·</span>
                      <span>{formatDate(lead.createdAt)}</span>
                    </div>

                    <select
                      value={row.status}
                      onChange={(e) =>
                        setRow(lead._id, {
                          status: e.target.value as LeadStatus,
                        })
                      }
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-green-400"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {STATUS_LABELS[s]}
                        </option>
                      ))}
                    </select>

                    <input
                      type="text"
                      value={row.notes}
                      onChange={(e) =>
                        setRow(lead._id, { notes: e.target.value })
                      }
                      placeholder="Add notes..."
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-green-400"
                    />

                    <div className="flex gap-2">
                      <button
                        onClick={() => saveLead(lead._id)}
                        disabled={row.saving || !isDirty}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${
                          isDirty
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {row.saving ? "Saving..." : row.saved ? "✓ Saved" : "Save"}
                      </button>
                      <button
                        onClick={() => deleteLead(lead._id, lead.name)}
                        className="px-4 py-2 rounded-lg text-sm border border-red-200 text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
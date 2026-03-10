import type { Inquiry } from "@/backend.d.ts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { useGetAllInquiries } from "@/hooks/usePublicQueries";
import {
  InboxIcon,
  Loader2,
  LogIn,
  LogOut,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import RiyamedsLogo from "./RiyamedsLogo";

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatTimestamp(ns: bigint): string {
  try {
    const ms = Number(ns / BigInt(1_000_000));
    if (ms === 0) return "—";
    const date = new Date(ms);
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "—";
  }
}

// ─── Login Screen ────────────────────────────────────────────────────────────

function AdminLogin() {
  const { login, isLoggingIn } = useInternetIdentity();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.12 250) 0%, oklch(0.26 0.14 230) 40%, oklch(0.32 0.14 200) 70%, oklch(0.28 0.12 184) 100%)",
      }}
      data-ocid="admin.login.panel"
    >
      {/* Decorative medical cross pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.99 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.99 0 0) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="border-white/10 shadow-2xl overflow-hidden">
          {/* Top accent stripe */}
          <div
            className="h-1 w-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.45 0.21 250), oklch(0.52 0.16 184), oklch(0.45 0.21 250))",
            }}
          />

          <CardHeader className="pt-10 pb-6 text-center space-y-5">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex justify-center"
            >
              <RiyamedsLogo height={52} />
            </motion.div>

            {/* Admin badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="flex justify-center"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <ShieldCheck size={14} className="text-primary" />
                <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                  Admin Portal
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 }}
              className="space-y-1.5"
            >
              <CardTitle className="font-display text-2xl text-foreground">
                Admin Panel
              </CardTitle>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sign in to view and manage customer inquiries
                <br />
                submitted via the RiyaMeds website.
              </p>
            </motion.div>
          </CardHeader>

          <CardContent className="pb-10 px-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44 }}
            >
              <Button
                className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold text-sm gap-2 shadow-blue-sm"
                onClick={login}
                disabled={isLoggingIn}
                data-ocid="admin.login.primary_button"
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <LogIn size={16} />
                    Login with Internet Identity
                  </>
                )}
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52 }}
              className="text-center text-xs text-muted-foreground"
            >
              Secure login powered by Internet Identity.
              <br />
              Only authorized administrators can access this panel.
            </motion.p>
          </CardContent>
        </Card>

        {/* Back to website link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-5 text-center"
        >
          <a
            href="/"
            className="text-white/50 hover:text-white/80 text-sm transition-colors"
            data-ocid="admin.login.link"
          >
            ← Back to RiyaMeds website
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Inquiry Row ─────────────────────────────────────────────────────────────

function InquiryTableRow({
  inquiry,
  index,
}: {
  inquiry: Inquiry;
  index: number;
}) {
  return (
    <TableRow
      className="hover:bg-muted/40 transition-colors"
      data-ocid={`admin.inquiry.row.${index}`}
    >
      <TableCell className="py-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <User size={14} className="text-primary" />
          </div>
          <span className="font-semibold text-foreground text-sm">
            {inquiry.name}
          </span>
        </div>
      </TableCell>
      <TableCell className="py-4 text-sm text-muted-foreground">
        <a
          href={`mailto:${inquiry.email}`}
          className="hover:text-primary transition-colors"
        >
          {inquiry.email}
        </a>
      </TableCell>
      <TableCell className="py-4 text-sm text-muted-foreground">
        <a
          href={`tel:${inquiry.phone}`}
          className="hover:text-primary transition-colors"
        >
          {inquiry.phone}
        </a>
      </TableCell>
      <TableCell className="py-4 max-w-xs">
        <p className="text-sm text-foreground/80 line-clamp-2">
          {inquiry.message}
        </p>
      </TableCell>
      <TableCell className="py-4 text-sm text-muted-foreground whitespace-nowrap">
        {formatTimestamp(inquiry.timestamp)}
      </TableCell>
    </TableRow>
  );
}

// ─── Loading Skeletons ────────────────────────────────────────────────────────

function TableSkeleton() {
  return (
    <div className="space-y-3" data-ocid="admin.inquiries.loading_state">
      {Array.from({ length: 5 }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: skeleton rows are positional
        <div key={i} className="flex items-center gap-4 p-4">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-36" />
        </div>
      ))}
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 text-center"
      data-ocid="admin.inquiries.empty_state"
    >
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <InboxIcon size={28} className="text-muted-foreground/50" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">
        No inquiries yet
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm">
        Customer inquiries submitted through the contact form will appear here.
      </p>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function AdminDashboard() {
  const { identity, clear } = useInternetIdentity();
  const {
    data: inquiries,
    isLoading,
    refetch,
    isFetching,
  } = useGetAllInquiries();

  const principal = identity?.getPrincipal().toString() ?? "";
  const shortPrincipal = principal
    ? `${principal.slice(0, 5)}...${principal.slice(-4)}`
    : "";
  const count = inquiries?.length ?? 0;

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.983 0.004 220)" }}
    >
      {/* ─── Top Header ─── */}
      <header
        className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-xl"
        style={{
          boxShadow: "0 1px 12px oklch(0.45 0.21 250 / 0.08)",
        }}
      >
        {/* Top accent */}
        <div
          className="h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.45 0.21 250), oklch(0.52 0.16 184), oklch(0.45 0.21 250))",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + title */}
            <div className="flex items-center gap-4">
              <a href="/" data-ocid="admin.nav.link">
                <RiyamedsLogo height={40} />
              </a>
              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-border">
                <ShieldCheck size={15} className="text-primary" />
                <span className="font-display font-bold text-base text-foreground">
                  Admin Panel
                </span>
              </div>
            </div>

            {/* Right: Principal + logout */}
            <div className="flex items-center gap-3">
              {shortPrincipal && (
                <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  <User size={11} />
                  {shortPrincipal}
                </div>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={clear}
                className="gap-2 text-sm font-semibold"
                data-ocid="admin.logout.button"
              >
                <LogOut size={14} />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Main Content ─── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold text-foreground mb-1">
            Customer Inquiries
          </h1>
          <p className="text-sm text-muted-foreground">
            All inquiries submitted through the contact form on the RiyaMeds
            Pharma website.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          <Card
            className="border-border shadow-xs"
            data-ocid="admin.stats.card"
          >
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Total Inquiries
                </p>
                <p className="text-2xl font-display font-bold text-foreground">
                  {isLoading ? (
                    <Skeleton className="h-7 w-10 inline-block" />
                  ) : (
                    count
                  )}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-xs">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <InboxIcon size={20} className="text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Status
                </p>
                <Badge
                  variant="secondary"
                  className="mt-0.5 bg-secondary/15 text-secondary border-secondary/20 font-semibold"
                >
                  {count > 0 ? "Active" : "No new"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-xs">
            <CardContent className="p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Last Refreshed
                </p>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  {new Date().toLocaleTimeString("en-IN")}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
                disabled={isFetching}
                className="gap-2 flex-shrink-0"
                data-ocid="admin.refresh.button"
              >
                <RefreshCw
                  size={13}
                  className={isFetching ? "animate-spin" : ""}
                />
                Refresh
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Inquiries table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.45 }}
        >
          <Card className="border-border shadow-xs overflow-hidden">
            <CardHeader className="pb-4 border-b border-border bg-muted/30">
              <div className="flex items-center justify-between">
                <CardTitle className="font-display text-lg font-bold text-foreground">
                  Inquiry List
                </CardTitle>
                {!isLoading && count > 0 && (
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/15 font-semibold"
                  >
                    {count} {count === 1 ? "inquiry" : "inquiries"}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TableSkeleton />
                  </motion.div>
                ) : !inquiries || count === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <EmptyState />
                  </motion.div>
                ) : (
                  <motion.div
                    key="table"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="overflow-x-auto">
                      <Table data-ocid="admin.inquiries.table">
                        <TableHeader>
                          <TableRow className="bg-muted/20 hover:bg-muted/20">
                            <TableHead className="font-semibold text-foreground/70 py-3 w-40">
                              Name
                            </TableHead>
                            <TableHead className="font-semibold text-foreground/70 py-3">
                              Email
                            </TableHead>
                            <TableHead className="font-semibold text-foreground/70 py-3 w-36">
                              Phone
                            </TableHead>
                            <TableHead className="font-semibold text-foreground/70 py-3">
                              Message
                            </TableHead>
                            <TableHead className="font-semibold text-foreground/70 py-3 w-40">
                              Date
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {inquiries.map((inquiry, i) => (
                            <InquiryTableRow
                              // biome-ignore lint/suspicious/noArrayIndexKey: rows keyed by stable position
                              key={i}
                              inquiry={inquiry}
                              index={i + 1}
                            />
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Riyameds Pharma Private Limited — Admin
          Portal
        </p>
      </footer>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function AdminPage() {
  const { identity, isInitializing } = useInternetIdentity();

  if (isInitializing) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 250) 0%, oklch(0.28 0.12 184) 100%)",
        }}
        data-ocid="admin.loading_state"
      >
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={36} className="text-white animate-spin" />
          <p className="text-white/70 text-sm font-medium">Initializing...</p>
        </div>
      </div>
    );
  }

  return identity ? <AdminDashboard /> : <AdminLogin />;
}

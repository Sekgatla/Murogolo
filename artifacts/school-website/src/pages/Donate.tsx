import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard, Building2, QrCode, ShieldCheck, ArrowRight,
  BookOpen, Dumbbell, Apple, Hammer, Package, CheckCircle2
} from "lucide-react";

const NAVY = "#1B2F6B";
const NAVY_DARK = "#111f4d";
const GOLD = "#c9a227";
const CREAM = "#f7f4ee";
const NAVY_LIGHT = "#e8edf8";

const AMOUNTS = [50, 100, 150, 300, 500, 1000];

const PAYMENT_METHODS = [
  { id: "card", label: "Credit / Debit", icon: CreditCard, desc: "Visa, Mastercard" },
  { id: "eft", label: "Instant EFT", icon: Building2, desc: "Secure bank transfer" },
  { id: "snap", label: "SnapScan / Zapper", icon: QrCode, desc: "Scan & pay instantly" },
];

const IMPACTS = [
  { n: "1", title: "Learning Materials", desc: "Providing textbooks and stationery for our learners." },
  { n: "2", title: "Sporting Equipment", desc: "Upgrading our soccer and netball facilities." },
  { n: "3", title: "School Nutrition", desc: "Supporting our daily meals for learners in need." },
  { n: "4", title: "Infrastructure", desc: "Maintaining classrooms and school buildings." },
  { n: "5", title: "School Uniforms", desc: "Clothing learners who cannot afford uniforms." },
  { n: "6", title: "Digital Access", desc: "Bringing technology and learning tools to classrooms." },
];

export default function Donate() {
  const [amount, setAmount] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [method, setMethod] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const finalAmount = amount ?? (custom ? Number(custom) : null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!finalAmount || !method) return;
    setDone(true);
  }

  return (
    <div style={{ background: CREAM, minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ─── HERO ─── asymmetric split */}
      <section style={{ background: NAVY, position: "relative", overflow: "hidden" }}>
        {/* off-center decorative ring */}
        <div style={{
          position: "absolute", right: "-80px", top: "-80px",
          width: 420, height: 420, borderRadius: "50%",
          border: `60px solid ${GOLD}18`, pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", right: "8%", bottom: "-120px",
          width: 260, height: 260, borderRadius: "50%",
          border: `2px solid ${GOLD}30`, pointerEvents: "none"
        }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 32px 60px",
          position: "relative", zIndex: 1,
        }} className="donate-hero-grid">

          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ paddingRight: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <span style={{
              display: "inline-block",
              background: GOLD,
              color: NAVY_DARK,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "4px 14px",
              borderRadius: 3,
              marginBottom: 24,
              width: "fit-content",
            }}>
              Every rand reaches a child
            </span>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.08,
              marginBottom: 24,
            }}>
              Give a child a<br />
              <span style={{ color: GOLD }}>fighting chance.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.75, maxWidth: 400 }}>
              Murogolo Primary School runs on community support. Books, uniforms, meals, sports — none of it happens without people like you stepping up.
            </p>
          </motion.div>

          {/* Right: stat blocks — overlapping the left slightly */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              alignContent: "center",
            }}
          >
            {[
              { val: "Grade R–7", sub: "Full primary journey" },
              { val: "8", sub: "Learning areas taught" },
              { val: "100%", sub: "Community school" },
              { val: "Ha Muila", sub: "Village, Limpopo" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  background: i % 2 === 0 ? `${GOLD}18` : "rgba(255,255,255,0.06)",
                  border: `1px solid ${GOLD}30`,
                  borderRadius: 8,
                  padding: "24px 20px",
                }}
              >
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 900, color: GOLD, margin: 0 }}>{s.val}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4, letterSpacing: "0.04em" }}>{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN FORM GRID ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 40,
          alignItems: "start",
        }} className="donate-form-grid">

          {/* ── LEFT: Amount + Payment + Form ── */}
          <div>
            {!done ? (
              <form onSubmit={submit}>
                {/* Amount picker */}
                <div style={{ marginBottom: 36 }}>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22, fontWeight: 800,
                    color: NAVY_DARK, marginBottom: 6,
                  }}>
                    How much are you giving?
                  </h2>
                  <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>
                    Pick an amount or type your own below.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 14 }}>
                    {AMOUNTS.map((a) => (
                      <motion.button
                        key={a}
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { setAmount(a); setCustom(""); }}
                        data-testid={`btn-amount-${a}`}
                        style={{
                          padding: "14px 8px",
                          borderRadius: 6,
                          border: amount === a ? `2px solid ${NAVY}` : "2px solid #e5e7eb",
                          background: amount === a ? NAVY : "#fff",
                          color: amount === a ? "#fff" : NAVY_DARK,
                          fontWeight: 700,
                          fontSize: 18,
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                          fontFamily: "'Playfair Display', serif",
                          position: "relative",
                        }}
                      >
                        R{a}
                        {amount === a && (
                          <span style={{
                            position: "absolute", top: -8, right: -8,
                            background: GOLD, borderRadius: "50%",
                            width: 20, height: 20,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <CheckCircle2 size={13} color={NAVY_DARK} />
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Custom input */}
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                      fontWeight: 800, color: "#9ca3af", fontSize: 17,
                    }}>R</span>
                    <input
                      type="number"
                      min={10}
                      placeholder="Other Amount"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setAmount(null); }}
                      data-testid="input-custom-amount"
                      style={{
                        width: "100%", padding: "15px 16px 15px 34px",
                        border: custom ? `2px solid ${NAVY}` : "2px solid #e5e7eb",
                        borderRadius: 6, fontSize: 16, fontWeight: 600,
                        outline: "none", background: "#fff", color: NAVY_DARK,
                        boxSizing: "border-box", transition: "border 0.15s",
                      }}
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div style={{ marginBottom: 32 }}>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22, fontWeight: 800,
                    color: NAVY_DARK, marginBottom: 18,
                  }}>
                    Payment Method
                  </h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {PAYMENT_METHODS.map((pm) => {
                      const Icon = pm.icon;
                      const sel = method === pm.id;
                      return (
                        <motion.button
                          key={pm.id}
                          type="button"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.985 }}
                          onClick={() => setMethod(pm.id)}
                          data-testid={`btn-method-${pm.id}`}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            padding: "22px 16px",
                            borderRadius: 8,
                            border: sel ? `2px solid ${NAVY}` : "2px solid #e5e7eb",
                            background: sel ? NAVY_LIGHT : "#fff",
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                            position: "relative",
                          }}
                        >
                          <Icon size={22} color={sel ? NAVY : "#6b7280"} strokeWidth={1.8} />
                          <span style={{
                            fontWeight: 700, fontSize: 15,
                            color: sel ? NAVY_DARK : "#374151",
                          }}>{pm.label}</span>
                          <span style={{ fontSize: 12, color: "#9ca3af" }}>{pm.desc}</span>
                          {sel && (
                            <span style={{
                              position: "absolute", top: 10, right: 12,
                              width: 10, height: 10, borderRadius: "50%",
                              background: NAVY,
                            }} />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Donor info */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    data-testid="input-donor-name"
                    style={{
                      padding: "14px 16px", border: "2px solid #e5e7eb",
                      borderRadius: 6, fontSize: 15, outline: "none",
                      background: "#fff", color: NAVY_DARK, transition: "border 0.15s",
                    }}
                    onFocus={(e) => (e.target.style.border = `2px solid ${NAVY}`)}
                    onBlur={(e) => (e.target.style.border = "2px solid #e5e7eb")}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-testid="input-donor-email"
                    style={{
                      padding: "14px 16px", border: "2px solid #e5e7eb",
                      borderRadius: 6, fontSize: 15, outline: "none",
                      background: "#fff", color: NAVY_DARK, transition: "border 0.15s",
                    }}
                    onFocus={(e) => (e.target.style.border = `2px solid ${NAVY}`)}
                    onBlur={(e) => (e.target.style.border = "2px solid #e5e7eb")}
                  />
                </div>

                {/* CTA */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="btn-donate-submit"
                  disabled={!finalAmount || !method || !name || !email}
                  style={{
                    width: "100%",
                    padding: "18px 24px",
                    background: !finalAmount || !method || !name || !email ? "#9ca3af" : NAVY,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 17,
                    borderRadius: 8,
                    border: "none",
                    cursor: !finalAmount || !method || !name || !email ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    letterSpacing: "0.01em",
                    transition: "background 0.2s",
                  }}
                >
                  Proceed to Secure Payment
                  <ArrowRight size={20} />
                </motion.button>

                {/* Trust badge */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 7, marginTop: 14,
                }}>
                  <ShieldCheck size={15} color="#16a34a" />
                  <span style={{ fontSize: 12, color: "#6b7280" }}>
                    Secure 256-bit encrypted payment processing
                  </span>
                </div>
              </form>
            ) : (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: NAVY,
                    borderRadius: 12,
                    padding: "56px 40px",
                    textAlign: "center",
                  }}
                >
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: `${GOLD}22`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                  }}>
                    <CheckCircle2 size={36} color={GOLD} />
                  </div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 12,
                  }}>
                    Thank you, {name.split(" ")[0]}.
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                    Your donation of <strong style={{ color: GOLD }}>R{finalAmount}</strong> is making a real difference. Our team will be in touch with payment confirmation shortly.
                  </p>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic", color: GOLD, fontSize: 17,
                  }}>
                    "Learning Today, Leading Tomorrow."
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* ── RIGHT: Bank details + Resource donations + Impact ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* School Bank Account */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{
                background: "#fff",
                border: `1px solid #e5e7eb`,
                borderLeft: `4px solid ${NAVY}`,
                borderRadius: 10,
                padding: "28px 28px",
              }}
            >
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 17, fontWeight: 800,
                color: NAVY, marginBottom: 16,
              }}>
                School Bank Account
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Bank", val: "FNB (First National Bank)" },
                  { label: "Acc Name", val: "Murogolo Primary School" },
                  { label: "Acc Number", val: "62345678901" },
                  { label: "Branch Code", val: "250655" },
                ].map(({ label, val }) => (
                  <div key={label} style={{ display: "flex", gap: 12, fontSize: 14 }}>
                    <span style={{ color: "#6b7280", minWidth: 96 }}>{label}:</span>
                    <span style={{ fontWeight: 700, color: NAVY_DARK }}>{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resource Donations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              style={{
                background: "#eef5ee",
                borderLeft: `4px solid #16a34a`,
                borderRadius: 10,
                padding: "24px 28px",
              }}
            >
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 17, fontWeight: 800,
                color: "#15532e", marginBottom: 10,
              }}>
                Resource Donations
              </h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65 }}>
                We also welcome donations of books, stationery, sports equipment, and school uniforms. Please contact the office for physical drop-offs.
              </p>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                marginTop: 16, flexWrap: "wrap",
              }}>
                {[BookOpen, Dumbbell, Apple, Package].map((Icon, i) => (
                  <div key={i} style={{
                    background: "#fff",
                    border: "1px solid #bbf7d0",
                    borderRadius: 8,
                    padding: "8px 12px",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <Icon size={14} color="#16a34a" />
                  </div>
                ))}
                <span style={{ fontSize: 12, color: "#6b7280" }}>Books · Stationery · Sports · Uniforms</span>
              </div>
            </motion.div>

            {/* Your Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              style={{ background: "#fff", borderRadius: 10, padding: "28px 28px", border: "1px solid #e5e7eb" }}
            >
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22, fontWeight: 900,
                color: NAVY_DARK, marginBottom: 20,
              }}>
                Your Impact
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {IMPACTS.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      padding: "16px 0",
                      borderBottom: i < IMPACTS.length - 1 ? "1px solid #f3f4f6" : "none",
                    }}
                  >
                    <div style={{
                      minWidth: 36, height: 36,
                      borderRadius: "50%",
                      background: NAVY_LIGHT,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 800, fontSize: 14, color: NAVY,
                      flexShrink: 0,
                    }}>
                      {item.n}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: 14, color: NAVY_DARK, marginBottom: 2 }}>{item.title}</p>
                      <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── BOTTOM STRIPE ─── */}
      <section style={{
        background: NAVY_DARK,
        padding: "40px 32px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 20, fontWeight: 700,
          color: GOLD, marginBottom: 6,
        }}>
          Murogolo Primary School
        </p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>
          Ha Muila Village · Kwaaidraai · Tshitale · Makhado · Limpopo &nbsp;·&nbsp; 082 668 8165
        </p>
      </section>

      {/* Responsive grid collapse */}
      <style>{`
        @media (max-width: 768px) {
          .donate-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .donate-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

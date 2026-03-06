import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ChevronDown, ChevronUp, Package } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { type Product, products } from "../data/products";

const categoryConfig: Record<
  string,
  { label: string; color: string; bg: string; border: string }
> = {
  musculoskeletal: {
    label: "Musculoskeletal",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  gastro: {
    label: "Gastroenterology",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  derma: {
    label: "Dermatology",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = categoryConfig[product.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="bg-white rounded-2xl border border-border/60 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
      data-ocid={`products.item.${index + 1}`}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{
          background:
            product.category === "musculoskeletal"
              ? "linear-gradient(90deg, oklch(0.45 0.21 250), oklch(0.52 0.16 184))"
              : product.category === "gastro"
                ? "linear-gradient(90deg, oklch(0.65 0.18 60), oklch(0.72 0.16 80))"
                : "linear-gradient(90deg, oklch(0.52 0.16 184), oklch(0.62 0.14 200))",
        }}
      />

      {/* Image area */}
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <div className="aspect-square flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${cfg.bg} ${cfg.color} ${cfg.border}`}
          >
            {cfg.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Names */}
        <div>
          <div className="text-xs font-semibold text-muted-foreground mb-1 tracking-wide">
            {product.brandName}
          </div>
          <h3 className="font-display font-bold text-foreground text-lg leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Formula */}
        <div className="bg-muted/50 rounded-lg px-3 py-2 border border-border/40">
          <p className="text-xs font-medium text-muted-foreground leading-snug">
            {product.formula}
          </p>
        </div>

        {/* Slogan */}
        {product.slogan && (
          <p className={`text-sm font-semibold italic ${cfg.color}`}>
            "{product.slogan}"
          </p>
        )}

        {/* Dosage + packaging */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Package size={12} className="text-primary" />
            {product.packaging}
          </span>
          <span className="text-muted-foreground/40 text-xs">•</span>
          <span className="text-xs text-muted-foreground">
            {product.dosage}
          </span>
        </div>

        {/* Expand/collapse details */}
        <div className="mt-auto pt-2 border-t border-border/40">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className={`w-full flex items-center justify-between text-sm font-semibold py-1.5 transition-colors ${cfg.color} hover:opacity-80`}
          >
            <span>{expanded ? "Hide Details" : "View Details"}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pt-3 space-y-3">
                  {/* Indications */}
                  <div>
                    <div className="text-xs font-bold text-foreground/50 uppercase tracking-wide mb-2">
                      Indications
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.indications.map((ind) => (
                        <span
                          key={ind}
                          className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground font-medium"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <div className="text-xs font-bold text-foreground/50 uppercase tracking-wide mb-2">
                      Key Benefits
                    </div>
                    <div className="space-y-1.5">
                      {product.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <CheckCircle2
                            size={13}
                            className={`${cfg.color} flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-xs text-foreground/70 leading-tight">
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compliance tags if any */}
                  {product.compliance && (
                    <div className="flex flex-wrap gap-1.5">
                      {product.compliance.map((c) => (
                        <Badge
                          key={c}
                          variant="outline"
                          className="text-xs font-medium"
                        >
                          {c}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

const tabOptions = [
  { value: "all", label: "All Products" },
  { value: "musculoskeletal", label: "Musculoskeletal" },
  { value: "gastro", label: "Gastro" },
  { value: "derma", label: "Dermatology" },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section
      id="products"
      className="section-padding bg-background cross-pattern"
      data-ocid="products.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3 bg-primary/8 px-4 py-1.5 rounded-full">
            Product Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-blue">Product Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each Riyameds product is backed by sound pharmaceutical science,
            manufactured to the highest standards, and trusted by healthcare
            professionals across India.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center mb-10">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-xl"
          >
            <TabsList className="grid grid-cols-4 w-full bg-muted/60 p-1 rounded-xl">
              {tabOptions.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white"
                  data-ocid={`products.${tab.value}.tab`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Products grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interested in our products? Contact us for detailed product
            information.
          </p>
          <Button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
            data-ocid="products.primary_button"
          >
            Request Product Information
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

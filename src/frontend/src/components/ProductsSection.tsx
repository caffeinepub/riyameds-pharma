import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { type Product, products } from "../data/products";
import ProductModal from "./ProductModal";

function StarRating({ rating }: { rating: number }) {
  const avg = rating > 0 ? rating : 5;
  return (
    <div className="flex gap-0.5 items-center">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={
            s <= avg
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/30"
          }
        />
      ))}
    </div>
  );
}

function avgRating(p: Product) {
  if (!p.reviews.length) return 5;
  return p.reviews.reduce((sum, r) => sum + r.rating, 0) / p.reviews.length;
}

function ProductCard({
  product,
  onViewDetails,
  index,
}: {
  product: Product;
  onViewDetails: (p: Product) => void;
  index: number;
}) {
  const isMuscleProd = product.category === "muscle";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl border border-border overflow-hidden card-hover shadow-sm group flex flex-col"
      data-ocid={`products.item.${index + 1}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-accent/30 to-muted/50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category badge overlay */}
        <div className="absolute top-3 left-3">
          <Badge
            className={`text-xs font-semibold ${
              isMuscleProd
                ? "bg-primary/90 text-primary-foreground"
                : "bg-secondary/90 text-secondary-foreground"
            }`}
          >
            {isMuscleProd ? "Muscle Recovery" : "Dermatology"}
          </Badge>
        </div>
        {/* Price badge overlay */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/95 text-foreground font-bold text-sm px-3 py-1 rounded-full shadow">
            {product.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-display font-bold text-foreground text-lg leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        {/* Reviews */}
        <div className="flex items-center gap-2">
          <StarRating rating={Math.round(avgRating(product))} />
          <span className="text-xs text-muted-foreground">
            ({product.reviews.length} reviews)
          </span>
        </div>

        <Button
          onClick={() => onViewDetails(product)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-auto"
          data-ocid={`products.viewdetails.primary_button.${index + 1}`}
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  function handleViewDetails(p: Product) {
    setSelectedProduct(p);
    setModalOpen(true);
  }

  return (
    <section
      id="products"
      className="section-padding bg-background"
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
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Scientifically Formulated{" "}
            <span className="text-gradient-green">Healthcare</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each RiyaMeds product is backed by clinical research, manufactured
            to the highest standards, and trusted by healthcare professionals
            across India.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex justify-center mb-10">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-sm"
          >
            <TabsList className="grid grid-cols-3 w-full bg-muted/60 p-1 rounded-xl">
              <TabsTrigger
                value="all"
                className="rounded-lg font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-ocid="products.all.tab"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="muscle"
                className="rounded-lg font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-ocid="products.muscle.tab"
              >
                Muscle
              </TabsTrigger>
              <TabsTrigger
                value="derma"
                className="rounded-lg font-semibold data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                data-ocid="products.derma.tab"
              >
                Derma
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

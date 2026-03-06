import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Package, Star } from "lucide-react";
import type { Product } from "../data/products";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={
            s <= rating
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/30"
          }
        />
      ))}
    </div>
  );
}

export default function ProductModal({
  product,
  open,
  onClose,
}: ProductModalProps) {
  if (!product) return null;

  const categoryColors: Record<string, string> = {
    musculoskeletal: "bg-primary/10 text-primary border-primary/20",
    gastro: "bg-amber-50 text-amber-600 border-amber-200",
    derma: "bg-secondary/10 text-secondary border-secondary/20",
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto"
        data-ocid="product.dialog"
      >
        <DialogHeader>
          <div className="flex items-start gap-3 flex-wrap">
            <DialogTitle className="font-display text-2xl text-foreground leading-tight">
              {product.name}
            </DialogTitle>
            <Badge
              variant="secondary"
              className={categoryColors[product.category] ?? ""}
            >
              {product.categoryLabel}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm font-medium">
            {product.brandName}
          </p>
        </DialogHeader>

        {/* Product image */}
        <div className="relative rounded-xl overflow-hidden bg-muted/40 border border-border/40">
          <div className="aspect-square max-h-48 flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Formula */}
        <div className="bg-accent/40 border border-border/40 rounded-xl px-4 py-3">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
            Formula
          </div>
          <p className="text-sm text-foreground/80 font-medium leading-snug">
            {product.formula}
          </p>
        </div>

        {/* Slogan */}
        {product.slogan && (
          <p className="text-sm font-semibold italic text-primary">
            "{product.slogan}"
          </p>
        )}

        <Separator />

        {/* Indications */}
        <div>
          <h3 className="font-display font-semibold text-foreground mb-3 text-base">
            Indications
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.indications.map((ind) => (
              <span
                key={ind}
                className="text-xs font-medium px-2.5 py-1 bg-muted rounded-lg text-muted-foreground border border-border/40"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        <Separator />

        {/* Benefits */}
        <div>
          <h3 className="font-display font-semibold text-foreground mb-3 text-base">
            Key Benefits
          </h3>
          <ul className="space-y-2">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 text-sm text-foreground/80"
              >
                <CheckCircle2
                  size={15}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Dosage + Packaging */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-accent/30 rounded-xl p-4 border border-border/40">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
              Dosage
            </div>
            <p className="text-sm text-foreground/80 font-medium">
              {product.dosage}
            </p>
          </div>
          <div className="bg-accent/30 rounded-xl p-4 border border-border/40">
            <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
              <Package size={12} />
              Packaging
            </div>
            <p className="text-sm text-foreground/80 font-medium">
              {product.packaging}
            </p>
          </div>
        </div>

        {/* Compliance */}
        {product.compliance && (
          <div className="flex flex-wrap gap-2">
            {product.compliance.map((c) => (
              <Badge key={c} variant="outline" className="text-xs">
                {c}
              </Badge>
            ))}
          </div>
        )}

        <Separator />

        {/* Reviews */}
        <div>
          <h3 className="font-display font-semibold text-foreground mb-4 text-base">
            Reviews
          </h3>
          <div className="space-y-3">
            {product.reviews.map((review, i) => (
              <div
                key={review.author}
                className="bg-accent/30 rounded-xl p-4 border border-border/50"
                data-ocid={`product.review.item.${i + 1}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-foreground">
                    {review.author}
                  </span>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-foreground/70 italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="mt-2 w-full py-3 rounded-xl border-2 border-primary/30 text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200"
          data-ocid="product.close_button"
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
}

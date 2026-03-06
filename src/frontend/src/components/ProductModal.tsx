import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
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

  const isMuscleProd = product.category === "muscle";

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
              className={
                isMuscleProd
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "bg-secondary/10 text-secondary border-secondary/20"
              }
            >
              {isMuscleProd ? "Muscle Recovery" : "Dermatology"}
            </Badge>
          </div>
        </DialogHeader>

        {/* Product image */}
        <div className="relative rounded-xl overflow-hidden bg-muted/50 aspect-[16/9]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
          {/* Price tag */}
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold text-lg px-4 py-1.5 rounded-full shadow-lg">
            {product.price}
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/80 leading-relaxed">
          {product.fullDescription}
        </p>

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
                <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Ingredients + Usage */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-display font-semibold text-foreground mb-2 text-base">
              Ingredients
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed bg-accent/50 p-3 rounded-lg">
              {product.ingredients}
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground mb-2 text-base">
              Usage Instructions
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed bg-accent/50 p-3 rounded-lg">
              {product.usage}
            </p>
          </div>
        </div>

        <Separator />

        {/* Reviews */}
        <div>
          <h3 className="font-display font-semibold text-foreground mb-4 text-base">
            Customer Reviews
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

        {/* Close CTA */}
        <button
          type="button"
          onClick={onClose}
          className="mt-2 w-full py-3 rounded-xl border-2 border-primary/30 text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          data-ocid="product.close_button"
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
}

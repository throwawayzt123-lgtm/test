// app/products/[productId]/reviews/[reviewId]/page.tsx

type Props = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

// 1. Add "async" to the function
export default async function ProductReview({ params }: Props) {
  // 2. "await" the params promise before using the variables
  const { productId, reviewId } = await params;

  return (
    <h1>
      Review Details {productId} and review = {reviewId}
    </h1>
  );
}
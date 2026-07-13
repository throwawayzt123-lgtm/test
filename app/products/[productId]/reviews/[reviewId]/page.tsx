type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ProductReview({ params }: Props) {
  return (
    <h1>
      Review Details {params.productId} and review = {params.reviewId}
    </h1>
  );
}
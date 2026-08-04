import "./RequestState.css";

type RequestStateProps = {
  variant: "loading" | "error";
  message: string;
  onRetry?: () => void;
};

const RequestState = ({
  variant,
  message,
  onRetry,
}: RequestStateProps) => {
  const isLoading = variant === "loading";

  return (
    <section
      className={`request-state request-state--${variant}`}
      role={isLoading ? "status" : "alert"}
      aria-live="polite"
    >
      {isLoading && (
        <span
          className="request-state__spinner"
          aria-hidden="true"
        />
      )}

      <p className="request-state__message">{message}</p>

      {!isLoading && onRetry && (
        <button
          className="request-state__button"
          type="button"
          onClick={onRetry}
        >
          Tentar novamente
        </button>
      )}
    </section>
  );
};

export default RequestState;
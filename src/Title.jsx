export function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit <b>exceeded!</b>
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}

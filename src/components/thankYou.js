export const ThankYou = ({ clicked }) => {
  console.log("clicked");
  console.log(clicked);
  return (
    <div
      style={{
        display: clicked ? "flex" : "none",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        margin: 0,
        padding: 0,
        top: 0,
        bottom: 0,
        position: "fixed",
        left: 0,
        zIndex: 1000,
        justifyContent: "center",
      }}
    >
      <div style={{ height: "100%" }}>
        <div
          style={{
            // top: "50%",
            padding: 200,
            left: "50%",
            transform: "translate(-50%,50%)",
            position: "relative",
            backgroundColor: "white",
            maxWidth: "60%",
            maxHeight: "40%",
          }}
        >
          <p
            style={
              {
                // position: "absolute",
              }
            }
          >
            Thank you for registering
          </p>
          <a href="https://www.google.com">
            <button className="button" id="thankYou">
              <span style={{ color: "white" }}>Submit</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

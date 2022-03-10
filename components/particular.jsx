import Particles from "react-particles-js";

const Particular = () => {
  return (
    <div>
      <Particles
        params={{
          particles: { number: { value: 50 }, size: { value: 3 } },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
      />
    </div>
  );
};

export default Particular;

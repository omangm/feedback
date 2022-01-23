import Card from "../components/shared/Card";

import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a feedback form for a service.</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;

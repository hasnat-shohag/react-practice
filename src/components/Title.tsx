import React from "react";

const Title = () => {
	console.log("rendering title");
	return <div>Optimization Testing</div>;
};

export default React.memo(Title);

import React from "react";

interface ContainerProps {
	children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div className="bg-gradient-to-tl from-slate-900 via-zinc-900 to-slate-900">
			{children}
		</div>
	);
};

export default Container;

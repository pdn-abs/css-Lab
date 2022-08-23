import { React } from 'react';

const RedStyle = () => ({
	flexGrow: 1,
});
const GreenStyle = () => ({
	flexGrow: 10,
});
const BlueStyle = () => ({
	flexGrow: 100,
});

const ColumnFlexBox = () =>
	<div className="column-container">
		<div className="color red" style={ RedStyle() }/>
		<div className="color green" style={ GreenStyle() }/>
		<div className="color blue" style={ BlueStyle() }/>
	</div>;

export default ColumnFlexBox;

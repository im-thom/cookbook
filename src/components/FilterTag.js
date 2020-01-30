import React from 'react';

const FilterTag = (props) => {
	return (
		<span className="card filter-tag" href="#" key={props.key}>
			{props.tagName}
		</span>
	);
};

export default FilterTag;
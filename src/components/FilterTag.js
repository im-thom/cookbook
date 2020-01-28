import React from 'react';

const FilterTag = (props) => {
	return (
		<a className="card filter-tag" href="#">
			{props.tagName}
		</a>
	);
};

export default FilterTag;
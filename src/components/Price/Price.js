import P from 'prop-types';

const Price = ({ className, value }) => <div className={className}>{value}$</div>;

Price.propTypes = {
  value: P.string.isRequired,
  className: P.string,
};

export default Price;

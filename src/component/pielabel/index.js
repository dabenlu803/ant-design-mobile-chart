import util from '../../common/util';
const { filterObjectKey } = util;

export default (props) => {
  const { chart } = props;
  if (chart) {
    const filterProps = filterObjectKey(props, ['chart']);
    chart.pieLabel(filterProps);
  }
  return null;
};

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SelectCard from '../SelectCard';
import Block from './RadioCards.styles';

class RadioCards extends PureComponent {
  static propTypes = {
    options: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
  }
  static defaultProps = {
    value: null,
    onChange: () => {},
    options: [],
    validationState: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.callback = this.callback.bind(this);
  }
  componentWillReceiveProps(next) {
    const { value } = this.props;
    if (value !== next.value) {
      this.setState({ value: next.value });
    }
  }
  handleSelect(value) {
    this.setState({ value }, this.callback);
  }
  callback() {
    const { value } = this.state;
    const { onChange } = this.props;
    if (onChange) onChange(value);
  }
  render() {
    const { value } = this.state;
    const { validationState, options } = this.props;
    return (
      <Block>
        {options.map(e => (
          <SelectCard
            key={e.value}
            {...e}
            validationState={validationState}
            checked={e.value === value}
            onSelect={() => this.handleSelect(e.value)}
          />
        ))}
      </Block>
    );
  }
}

export default RadioCards;

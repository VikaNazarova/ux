import React, { Component } from 'react';
import If from 'react-if';
import T from '@lskjs/t';
import ErrorIcon from './svg/error';
import WarningIcon from './svg/warning';
import InfoIcon from './svg/info';
import SuccessIcon from './svg/success';
import NotifyItem from './components/NotifyItem';
import NotifyAvatar from './components/NotifyAvatar';
import NotifyInfo from './components/NotifyInfo';
import NotifyTitle from './components/NotifyTitle';
import NotifyText from './components/NotifyText';
import NotifyItemInner from './components/NotifyItemInner';

class Notification extends Component {
  getDefaultImage() {
    const { type } = this.props;
    if (type === 'notify.error') {
      return <ErrorIcon size={20} />;
    }
    if (type === 'notify.success') {
      return <SuccessIcon size={20} />;
    }
    if (type === 'notify.warning') {
      return <WarningIcon size={20} />;
    }
    if (type === 'notify.info') {
      return <InfoIcon size={20} />;
    }
    // @TODO: Сделать иконку вопроса
    return <InfoIcon size={20} />;
  }

  render() {
    const { href, type, title, text, image, clickable } = this.props;
    return (
      <NotifyItem
        // unread
        // unread={transparent ? false : !(item.viewedAt)}
        href={href}
        type={type}
        clickable={clickable !== 'div'}
      >
        <NotifyItemInner>
          <NotifyAvatar>{image || this.getDefaultImage()}</NotifyAvatar>
          <NotifyInfo>
            <If condition={!!title}>
              <NotifyTitle>{title}</NotifyTitle>
            </If>
            <If condition={!title && type === 'error'}>
              <T name="common.error" />
            </If>
            <If condition={!title && type !== 'error'}>
              <T name="common.success" />
            </If>
            <If condition={!!text}>
              <NotifyText>{text}</NotifyText>
            </If>
          </NotifyInfo>
        </NotifyItemInner>
      </NotifyItem>
    );
  }
}

export default Notification;

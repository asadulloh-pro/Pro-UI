import { FC, ReactNode, useMemo } from 'react';
import { ButtonProps } from '../../../types';
import { styleConfig } from './style';
import Spiner from '../spiner';

const Prefix: FC<{
  children?: ReactNode;
  loading?: boolean;
}> = (props) => {
  const { loading, children } = props;
  if (loading || children) {
    return <span className='inline-flex items-center justify-center'>{loading ? <Spiner /> : children}</span>;
  } else {
    return null;
  }
};

const Button: FC<ButtonProps> = (props) => {
  const {
    typeEl = 'default',
    className,
    children,
    loading,
    prefix,
    ...rest
  } = props;

  const buttonProps: ButtonProps = {
    type: 'button',
    ...rest,
  };

  const styles = useMemo(() => {
    return [className, styleConfig(typeEl)];
  }, [typeEl, className]);

  const disabled = useMemo(() => {
    return props.disabled || loading
  }, [props.disabled, loading])

  return (
    <button className={styles.join(' ')} {...buttonProps} disabled={disabled}>
      <Prefix children={prefix} loading={loading} />
      <span>{children}</span>
    </button>
  );
};

export default Button;

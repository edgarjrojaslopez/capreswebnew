import classNames from 'classnames';
const Button = ({
  size,
  bgColor,
  buttonWidth,
  textColor,
  fontWheight,
  children
}) => {
  return (
    <button
      className={classNames(
        [`bg-${bgColor} text-${textColor} ${buttonWidth} font-${fontWheight}`],
        'mt-6 flex flex-col items-center justify-center rounded py-3 px-6',
        {
          'text-xs': size === 'sm',
          'text-base': size === 'md',
          'text-xl': size === 'lg'
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;

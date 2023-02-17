import { BsBoxArrowUpRight } from 'react-icons/bs';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import classNames from 'classnames';

type LinkProps = {
  href: string;
  icon?: boolean;
  animation?: boolean;
  nextLinkProps?: Omit<NextLinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const Link = ({
  href,
  children,
  icon = false,
  animation = true,
  className,
  nextLinkProps,
  ...rest
}: LinkProps) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        className={classNames(
          'relative',
          {
            ['before:primary-gradient before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100']:
              animation,
          },
          className
        )}
        {...nextLinkProps}
        {...rest}
      >
        {children}
      </NextLink>
    );
  }

  if (isAnchorLink) {
    return (
      <a
        href={href}
        className={classNames(
          'relative',
          {
            ['before:primary-gradient before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100']:
              animation,
          },
          className
        )}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={classNames(
        'relative',
        {
          ['before:primary-gradient before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100']:
            animation,
        },
        className
      )}
      {...rest}
    >
      {children}
      {icon && (
        <span>
          <BsBoxArrowUpRight
            size={16}
            className='relative -top-px inline-block'
          />
        </span>
      )}
    </a>
  );
};

export default Link;

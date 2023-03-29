import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import classNames from 'classnames';
import { Button } from '@/components/ui';

type LinkProps = {
  href: string;
  nextLinkProps?: Omit<NextLinkProps, 'href'>;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
} & React.ComponentPropsWithRef<'a'>;

const Link = ({
  href,
  children,
  className,
  nextLinkProps,
  variant,
  ...props
}: LinkProps) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        arial-label={`Link to ${href}`}
        {...nextLinkProps}
        {...props}
      >
        <Button variant={variant || 'ghost'} className={className}>
          {children}
        </Button>
      </NextLink>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} arial-label={`Link to ${href}`} {...props}>
        <Button className={className}>{children}</Button>
      </a>
    );
  }

  return (
    <a
      target='_blank'
      arial-label={`Link to ${href}`}
      rel='noopener noreferrer'
      href={href}
      {...props}
    >
      <Button className={className}>{children}</Button>
    </a>
  );
};

export default Link;

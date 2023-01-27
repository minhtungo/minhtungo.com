// @ts-nocheck

import { Repo } from '../components';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import user from '@testing-library/user-event';

//create a list of mock repo
const mockRepos = [
  {
    name: 'Repo 1',
    description: 'This is a description',
    githubURL: 'https://github.com',
    liveURL: 'https://github.com',
    tools: ['React', 'Next.js', 'Framer Motion'],
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Repo 2',
    description: 'This is a description',
    githubURL: 'https://github.com',
    liveURL: 'https://github.com',
    tools: ['React', 'Next.js', 'Framer Motion'],
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Repo 3',
    description: 'This is a description',
    githubURL: 'https://github.com',
    liveURL: 'https://github.com',
    tools: ['React', 'Next.js', 'Framer Motion'],
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Repo 4',
    description: 'This is a description',
    githubURL: 'https://github.com',
    liveURL: 'https://github.com',
    tools: ['React', 'Next.js', 'Framer Motion'],
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Repo 5',
    description: 'This is a description',
    githubURL: 'https://github.com',
    liveURL: 'https://github.com',
    tools: ['React', 'Next.js', 'Framer Motion'],
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Repo 6',
    description: 'This is a description',
    githubURL: 'https://github.com',
    liveURL: 'https://github.com',
    tools: ['React', 'Next.js', 'Framer Motion'],
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Repo 7',
    description: 'This is a description',
    githubURL: 'https://github.com',
    liveURL: 'https://github.com',
    tools: ['React', 'Next.js', 'Framer Motion'],
    image: 'https://via.placeholder.com/150',
  },
];

test('shows the "Show More" button when not all repos are displayed', () => {
  render(<Repo repos={mockRepos} />);
  const showMoreButton = screen.getByText('Show More');
  expect(showMoreButton).toBeInTheDocument();
});

test('displays more repos when user clicks on Show More and displays less when user clicks on Show Less"', () => {
  render(<Repo repos={mockRepos} />);
  const showMoreButton = screen.getByText('Show More');
  user.click(showMoreButton);
  const showLessButton = screen.getByText('Show Less');
  expect(showLessButton).toBeInTheDocument();
});

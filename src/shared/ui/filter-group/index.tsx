import type { FC, ReactNode } from 'react'

interface FilterGroupProps {
  title: string;
  children: ReactNode;
}

export const FilterGroup: FC<FilterGroupProps> = ({ title, children }) => (
  <div>
    <h3 className="mb-2 text-sm font-medium text-gray-700">{title}</h3>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

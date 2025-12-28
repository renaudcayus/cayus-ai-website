import { Check } from 'lucide-react';

export interface CheckListProps {
  list: string[];
}

function Checklist({ list }: CheckListProps) {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li className="flex items-center gap-x-2" key={item}>
            <Check size={16} />
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Checklist;

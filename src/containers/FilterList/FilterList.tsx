import React, { FC } from 'react';
import { makeClass } from 'utils/Helpers';
import Form from '../../components/Form';
import Input from '../../elements/Input';
import { InputType } from '../../elements/Input/Input';

export type FilterListProps = {
  filterList: { name: string; title: string; size?: number }[];
  selected?: (list: string[]) => void;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * The `FilterList` component example.
 * @param props
 * @constructor
 */
const FilterList: FC<FilterListProps> = (props: FilterListProps) => {
  const classes = makeClass(['d-FilterList', props.className]);
  return (
    <div className={classes}>
      <div>
        <Form
          submitButtonText={null}
          onAllChange={(data) => {
            props.selected && props.selected(Object.keys(data));
          }}
        >
          {props.filterList.map((f) => (
            <div>
              <Input type={InputType.toggle} name={f.name} label={f.title} />
            </div>
          ))}
        </Form>
      </div>
    </div>
  );
};

export default FilterList;

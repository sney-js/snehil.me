import React, { FC, useState } from 'react';
import { makeClass, setCSSVar } from 'utils/Helpers';
import Form from '../../components/Form';
import Input from '../../elements/Input';
import { InputType } from '../../elements/Input/Input';
import { FilterItem, getNameList } from './FilterListUtils';

export type FilterListProps = {
  filterList: FilterItem[];
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
      <div className={'d-filter-stick'}>
        <Form
          submitButtonText={null}
          onAllChange={(data) => {
            let selectedFilterNames: string[] = [];
            Object.keys(data).map((n) => {
              selectedFilterNames = selectedFilterNames.concat(getNameList(n));
            });
            props.selected && props.selected(selectedFilterNames);
          }}
        >
          {props.filterList.map((f) => (
            <FilterSelector {...f} />
          ))}
        </Form>
      </div>
    </div>
  );
};

let FilterSelector = (props: FilterItem & { selected?: boolean }) => {
  const [isSelected, setSelected] = useState(props.selected || false);
  return (
    <div
      className={makeClass(['d-filter-item', isSelected && 'filter-selected'])}
      style={setCSSVar({
        '--filter-size': props.size,
        '--filter-align': props.align,
        '--filter-alignVal': props.alignVal
      })}
    >
      <Input
        type={InputType.checkboxInvisible}
        name={props.name.join('|')}
        label={props.title}
        onChange={(e) => {
          const val = e.target.checked;
          setSelected(val);
        }}
      />
    </div>
  );
};

export default FilterList;

import Button from "../Button";
import Dropdown from "../Dropdown";
import { ButtonTypes } from "../Button/helpers";

const Challenge = (): JSX.Element => {
  return (
    <div>
      <h2>Button</h2>
      <Button type={ButtonTypes.NewInvoice} />
      <Button type={ButtonTypes.MarkAsPaid} />
      <Button type={ButtonTypes.Edit} />
      <Button type={ButtonTypes.Edit} isDark />
      <Button type={ButtonTypes.SaveAsDraft} />
      <Button type={ButtonTypes.SaveAsDraft} isDark />
      <Button type={ButtonTypes.Delete} />
      <Button type={ButtonTypes.NewItem} />

      <h2>DropDown</h2>
      <Dropdown options={["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"]} />
    </div>
  );
};

export default Challenge;

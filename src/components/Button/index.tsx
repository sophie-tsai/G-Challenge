import cn from "classnames";
import { buttonTextMap, ButtonTypes } from "./helpers";
import "./button.scss";

/**
 * Reusable button component
 * @param {ButtonTypes} type  accepts ButtonTypes: NewInvoice, MarkAsPaid, Edit, SaveAsDraft, Delete, NewItem
 * @param {boolean} isDark optional flag for dark mode on Edit and SaveAsDraft buttons (defaults to false)
 *
 * @example
 *    <Button
 *      type={ButtonTypes.Edit}
 *      isDark />
 *
 */
const Button = ({
  type,
  isDark = false,
}: {
  type: ButtonTypes;
  isDark?: boolean;
}): JSX.Element => {
  if (!type) return null;

  return (
    <button
      className={cn("button", {
        invoice: type === ButtonTypes.NewInvoice,
        paid: type === ButtonTypes.MarkAsPaid,
        edit: type === ButtonTypes.Edit,
        draft: type === ButtonTypes.SaveAsDraft,
        delete: type === ButtonTypes.Delete,
        item: type === ButtonTypes.NewItem,
        dark_mode: isDark,
      })}
    >
      {type === ButtonTypes.NewInvoice && (
        <div className="circle">
          <span className="plus_symbol">+</span>
        </div>
      )}
      <span>{buttonTextMap[type]}</span>
    </button>
  );
};

export default Button;

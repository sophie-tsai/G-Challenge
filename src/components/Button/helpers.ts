export enum ButtonTypes {
  NewInvoice = "NEW_INVOICE",
  MarkAsPaid = "MARK_AS_PAID",
  Edit = "EDIT",
  SaveAsDraft = "SAVE_AS_DRAFT",
  Delete = "DELETE",
  NewItem = "ADD_NEW_ITEM",
}

export const buttonTextMap = {
  [ButtonTypes.NewInvoice]: "New Invoice",
  [ButtonTypes.MarkAsPaid]: "Mark as Paid",
  [ButtonTypes.Edit]: "Edit",
  [ButtonTypes.SaveAsDraft]: "Save as Draft",
  [ButtonTypes.Delete]: "Delete",
  [ButtonTypes.NewItem]: "+ Add New Item",
};

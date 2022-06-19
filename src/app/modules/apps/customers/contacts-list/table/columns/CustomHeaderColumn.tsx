import { FC } from "react";
import { ColumnInstance } from "react-table";
import { ContactModel } from "../../../../../../models/customers/Contact.class";

type Props = {
  column: ColumnInstance<ContactModel>;
};

const CustomHeaderColumn: FC<Props> = ({ column }) => (
  <>
    {column.Header && typeof column.Header === "string" ? (
      <th {...column.getHeaderProps()}>{column.render("Header")}</th>
    ) : (
      column.render("Header")
    )}
  </>
);

export { CustomHeaderColumn };

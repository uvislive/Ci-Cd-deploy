import { useAddUserForm } from "../../forms/User-Form/helpers/UseAddUserForm";
import UserForm from "../../forms/User-Form/Userform";
import { withFormLogic } from "../../hoc/withFormLogic";

const AddUser = withFormLogic(UserForm, useAddUserForm);
export default AddUser;

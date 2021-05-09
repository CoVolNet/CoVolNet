import { Radiobtns, InputFields } from "../components";
import "./volunteer.css";
const Star = () => {
    return (<span style={{ color: "red" }}>*</span>);
}
export const Volunteer = () => {
    return (
        <div className="body">
            <div className="volunteerFrm">
                {/* White background */}
                <div className="whitebkg">
                    <div className="heading">CovolNet Volunteer Form</div>
                    <div>
                        <div className="required-fields">*Required fields</div>
                    </div>
                    {/* Name field */}
                    <div className="fullName">
                        <InputFields>
                            Full Name <Star />
                        </InputFields>
                    </div>
                    {/* location` */}
                    <div className="padding">
                        <div>
                            Location <Star />
                        </div>
                        <div className="locationBoxes">
                            <div className="State">
                                <InputFields>State/Union Territory </InputFields>
                            </div>
                            <div className="State district">
                                <InputFields>District </InputFields>
                            </div>
                        </div>
                    </div>
                    {/* Language of comunication */}
                    <div className="padding">
                        <div> Preferred Language(s) for communication - Please tick all applicable <Star /></div>
                        <div className="languages">
                            <Radiobtns type="radio" name="language">English</Radiobtns>
                        </div>
                        <div className="languages">
                            <Radiobtns type="radio" name="language">Hindi</Radiobtns>
                        </div>
                        <div className="other">
                            <div className="languages">
                                <Radiobtns type="radio" name="language">Other</Radiobtns>
                            </div>
                            <div className="otherInput">
                                <InputFields></InputFields></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

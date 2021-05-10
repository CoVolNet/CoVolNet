import { useState } from "react";
import { Radiobtns, InputFields } from "../components";
import "./volunteer.css";
const Star = () => {
  return <span style={{ color: "red" }}>*</span>;
};
export const Volunteer = () => {
  const [disabled, setDisabled] = useState(true);

  function changeDisabled() {
    var element = document.getElementById("otherLang");
    if (element.checked) setDisabled(false);
    else setDisabled(true);
  }
  return (
    <div className="body">
      <div className="volunteerFrm">
        {/*  -----------------------------------------------------------------------White background ----------------------------------------------------------------------- */}
        <div className="whitebkg">
          <div className="heading">CovolNet Volunteer Form</div>
          <div>
            <div className="required-fields">*Required fields</div>
          </div>
          {/*  -----------------------------------------------------------------------Name field ----------------------------------------------------------------------- */}
          <div className="fullName">
            <InputFields placeholder="Name" id="name">
              Full Name <Star />
            </InputFields>
          </div>
          {/*  -----------------------------------------------------------------------location` ----------------------------------------------------------------------- */}
          <div className="padding">
            <div>
              Location <Star />
            </div>
            <div className="locationBoxes">
              <div className="Width">
                <InputFields id="state" placeholder="State/Union Territory">
                  State/Union Territory{" "}
                </InputFields>
              </div>
              <div className="Width district">
                <InputFields placeholder="District" id="district">
                  District{" "}
                </InputFields>
              </div>
            </div>
          </div>
          {/*  -----------------------------------------------------------------------Language of comunication ----------------------------------------------------------------------- */}
          <div className="padding">
            <div>
              {" "}
              Preferred Language(s) for communication - Please tick all
              applicable <Star />
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="language">
                English
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="language">
                Hindi
              </Radiobtns>
            </div>
            <div className="other">
              <div className="radiobtnSpace" onClick={changeDisabled}>
                <Radiobtns type="checkbox" name="language" id="otherLang">
                  Other
                </Radiobtns>
              </div>
              <div className="otherInput">
                <InputFields
                  placeholder="other"
                  id="otherLanguage"
                  disabled={disabled}
                ></InputFields>
              </div>
            </div>
          </div>
          <div>
            {/* -----------------------------------------------------------------------Phone Number  -----------------------------------------------------------------------*/}
            <div className="padding Width">
              {/* phone Number */}
              <InputFields placeholder="123456789" id="phnonumber">
                Phone Number <Star />
              </InputFields>
            </div>
            <div className="padding">
              If WhatsApp number is different to above, please provide that
              below
              <div className="Width">
                {/* Whatsapp Number */}
                <InputFields
                  placeholder="123456789"
                  id="phnonumber"
                ></InputFields>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------Preferred Volunterring days  -----------------------------------------------------------------------*/}
          <div className="padding">
            Preferred Volunteering Days (Choose multiple if applicable)
            <Star />
            <div className="radiobtnSpace">
              <Radiobtns name="volunteeringDays" type="checkbox">
                Monday
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns name="volunteeringDays" type="checkbox">
                Tuesday
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns name="volunteeringDays" type="checkbox">
                Wednesday
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns name="volunteeringDays" type="checkbox">
                Thursday
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns name="volunteeringDays" type="checkbox">
                Friday
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns name="volunteeringDays" type="checkbox">
                Saturday
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns name="volunteeringDays" type="checkbox">
                Sunday
              </Radiobtns>
            </div>
          </div>
          {/* --------------------------------------------------Preferred Timings  -----------------------------------------------------------------------*/}
          <div className="padding">
            Preferred Timings (Choose multiple if applicable, Timing in IST)
            <Star />
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                7am - 10am
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                10am - 1pm
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                1pm - 4pm
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                4pm - 7pm{" "}
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                7pm - 9pm{" "}
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                9pm - 11pm{" "}
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                11pm - 1am{" "}
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                1am - 3am{" "}
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                3am - 5am
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="volunteeringTimes">
                5am - 7am
              </Radiobtns>
            </div>
          </div>
          <div className="padding locationBoxes">
            {/*  -----------------------------------------------------------------------Social Media handle ----------------------------------------------------------------------- */}
            <div className="Width">
              <InputFields placeholder="Instagram">Instagram</InputFields>
            </div>
            <div className="Width district">
              <InputFields placeholder="Twitter">Twitter</InputFields>
            </div>
          </div>
          {/*   -----------------------------------------------------------------------Preffered Work  ----------------------------------------------------------------------- */}
          <div className="padding">
            Preferred Work (Choose multiple if applicable) <Star />
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="preferredwrk">
                Verification of Information for social media and SOS calls
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="preferredwrk">
                Collate and put together Information (Posters and content
                writing)
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="checkbox" name="preferredwrk">
                SOS Help* (Involves talking to patients in emergency situations
                and dealing with news of death.)
              </Radiobtns>
            </div>
          </div>
          {/* -------------------------------------------------------------------------On Discord?-------------------------------------------------------------------- */}
          <div className="padding">
            Are you on Discord or are willing to get on Discord? (A free
            community app)* <Star />
            <div className="radiobtnSpace">
              <Radiobtns type="radio" name="discord">
                Yes
              </Radiobtns>
            </div>
            <div className="radiobtnSpace">
              <Radiobtns type="radio" name="discord">
                No
              </Radiobtns>
            </div>
          </div>
          {/* ------------------------------------------------------------Another Skills???---------------------------------------------------------------------------- */}
          <div className="padding">
            Specific skills you'd like to specify that could help (eg. Tech,
            Content Writing, Design etc)
            <div className="Width">
              <InputFields placeholder="NILL"></InputFields>
            </div>
          </div>
          {/*---------------------------------------------------------------------------- Submit btn---------------------------------------------------------------------------- */}
          <div></div>
        </div>
        <div className="warning">
          <div className="required-fields ">
            The Submit button will appear once you enter all the required fields
            only.
          </div>
          <div style={{ paddingTop: "1rem" }}>
            Never submit passwords or any other personal details that aren't
            asked.
          </div>
        </div>
      </div>
    </div>
  );
};

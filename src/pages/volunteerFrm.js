import { useState } from "react";
import { Radiobtns, InputFields, ThankYou } from "../components";

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

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [district, setDistrict] = useState("");
  const [communication, setCommunication] = useState(false);
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [other, setOther] = useState("");
  const [volDay, setVoluunteerDays] = useState(false);
  const [volTimes, setVolTimes] = useState(false);
  const [insta, setInsta] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [work, setwork] = useState(false);
  const [discord, setDiscord] = useState(false);
  const [skills, setSkills] = useState("");
  const [clickedBtn, setClickedBtn] = useState(false);

  function clicked() {
    setClickedBtn(true);
    console.log(name);
    console.log(location);
    console.log(district);
    console.log(communication);
    console.log(phone);
    console.log(volDay);
    console.log(volTimes);
    console.log(work);
    console.log(discord);
  }

  return (
    <div className="body">
      <div className="volunteerFrm">
        {/*  -----------------------------------------------------------------------White background ----------------------------------------------------------------------- */}
        <div className="whitebkg">
          <div>
            <div className="heading">CoVolNet Volunteer Form</div>
            <div>
              <div className="required-fields">*Required fields</div>
            </div>
            {/*  -----------------------------------------------------------------------Name field ----------------------------------------------------------------------- */}
            <div className="fullName Width">
              <InputFields placeholder="Name" id="name" changeValue={setName}>
                Full Name <Star />
              </InputFields>
            </div>
            {/*  -----------------------------------------------------------------------location` ----------------------------------------------------------------------- */}
            <div className="padding">
              <div>
                Location <Star />
              </div>
              <div className="locationBoxes">
                <div className="">
                  <InputFields
                    id="state"
                    placeholder="State/Union Territory"
                    changeValue={setLocation}
                  >
                    State/Union Territory{" "}
                  </InputFields>
                </div>
                <div className=" district">
                  <InputFields
                    placeholder="District"
                    id="district"
                    changeValue={setDistrict}
                  >
                    District{" "}
                  </InputFields>
                </div>
              </div>
            </div>
            {/*  -----------------------------------------------------------------------Language of comunication ----------------------------------------------------------------------- */}
            <div className="padding">
              <div className="Language">
                {" "}
                Preferred Language(s) for communication - Please tick all
                applicable <Star />
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="language"
                  changeValue={setCommunication}
                  id="English"
                >
                  English
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="language"
                  changeValue={setCommunication}
                  id="Hindi"
                >
                  Hindi
                </Radiobtns>
              </div>
              <div className="other">
                <div className="radiobtnSpace" onClick={changeDisabled}>
                  <Radiobtns
                    type="checkbox"
                    name="language"
                    id="otherLang"
                    changeValue={setCommunication}
                  >
                    Other
                  </Radiobtns>
                </div>
                <div className="otherInput">
                  <InputFields
                    placeholder="other"
                    id="otherLanguage"
                    disabled={disabled}
                    changeValue={setOther}
                  ></InputFields>
                </div>
              </div>
            </div>
            <div>
              {/* -----------------------------------------------------------------------Phone Number  -----------------------------------------------------------------------*/}
              <div className="padding">
                {/* phone Number */}
                <InputFields
                  placeholder="123456789"
                  id="phnonumber"
                  changeValue={setPhone}
                >
                  Phone Number <Star />
                </InputFields>
              </div>
              <div className="padding">
                <div className="Language">
                  If WhatsApp number is different to above, please provide that
                  below
                </div>
                <div className="Width">
                  {/* Whatsapp Number */}
                  <InputFields
                    placeholder="123456789"
                    id="whatsapp"
                    changeValue={setWhatsapp}
                  ></InputFields>
                </div>
              </div>
            </div>
            {/* -------------------------------------------------------------------Preferred Volunterring days  -----------------------------------------------------------------------*/}
            <div className="padding">
              <div className="Language">
                Preferred Volunteering Days (Choose multiple if applicable)
                <Star />
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  name="volunteeringDays"
                  type="checkbox"
                  id="monday"
                  changeValue={setVoluunteerDays}
                >
                  Monday
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  name="volunteeringDays"
                  type="checkbox"
                  id="tuesday"
                  changeValue={setVoluunteerDays}
                >
                  Tuesday
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  name="volunteeringDays"
                  type="checkbox"
                  id="wednesday"
                  changeValue={setVoluunteerDays}
                >
                  Wednesday
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  name="volunteeringDays"
                  type="checkbox"
                  id="thursday"
                  changeValue={setVoluunteerDays}
                >
                  Thursday
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  name="volunteeringDays"
                  type="checkbox"
                  id="friday"
                  changeValue={setVoluunteerDays}
                >
                  Friday
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  name="volunteeringDays"
                  type="checkbox"
                  id="saturday"
                  changeValue={setVoluunteerDays}
                >
                  Saturday
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  name="volunteeringDays"
                  type="checkbox"
                  id="sunday"
                  changeValue={setVoluunteerDays}
                >
                  Sunday
                </Radiobtns>
              </div>
            </div>
            {/* --------------------------------------------------Preferred Timings  -----------------------------------------------------------------------*/}
            <div className="padding">
              <div className="Language">
                Preferred Timings (Choose multiple if applicable, Timing in IST)
                <Star />
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="7-10"
                  changeValue={setVolTimes}
                >
                  7am - 10am
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="10-1"
                  changeValue={setVolTimes}
                >
                  10am - 1pm
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="1-4"
                  changeValue={setVolTimes}
                >
                  1pm - 4pm
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="4-7"
                  changeValue={setVolTimes}
                >
                  4pm - 7pm{" "}
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="7-9"
                  changeValue={setVolTimes}
                >
                  7pm - 9pm{" "}
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="9-11"
                  changeValue={setVolTimes}
                >
                  9pm - 11pm{" "}
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="11-1"
                  changeValue={setVolTimes}
                >
                  11pm - 1am{" "}
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="1-3"
                  changeValue={setVolTimes}
                >
                  1am - 3am{" "}
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="3-5"
                  changeValue={setVolTimes}
                >
                  3am - 5am
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="volunteeringTimes"
                  id="5-7"
                  changeValue={setVolTimes}
                >
                  5am - 7am
                </Radiobtns>
              </div>
            </div>
            <div className="padding locationBoxes">
              {/*  -----------------------------------------------------------------------Social Media handle ----------------------------------------------------------------------- */}
              <div className="Width">
                <InputFields
                  placeholder="Instagram"
                  id="instagram"
                  changeValue={setInsta}
                >
                  Instagram
                </InputFields>
              </div>
              <div className="Width district">
                <InputFields
                  placeholder="Twitter"
                  id="twitter"
                  changeValue={setTwitter}
                >
                  Twitter
                </InputFields>
              </div>
            </div>
            {/*   -----------------------------------------------------------------------Preffered Work  ----------------------------------------------------------------------- */}
            <div className="padding">
              <div className="Language">
                Preferred Work (Choose multiple if applicable) <Star />
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="preferredwrk"
                  id="verification"
                  changeValue={setwork}
                >
                  Verification of Information for social media and SOS calls
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="preferredwrk"
                  id="contentwriting"
                  changeValue={setwork}
                >
                  Collate and put together Information (Posters and content
                  writing)
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="checkbox"
                  name="preferredwrk"
                  id="sos"
                  changeValue={setwork}
                >
                  SOS Help* (Involves talking to patients in emergency
                  situations and dealing with news of death.)
                </Radiobtns>
              </div>
            </div>
            {/* -------------------------------------------------------------------------On Discord?-------------------------------------------------------------------- */}
            <div className="padding">
              <div className="Language">
                Are you on Discord or are willing to get on Discord? (A free
                community app) <Star />
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="radio"
                  name="discord"
                  id="yes"
                  changeValue={setDiscord}
                >
                  Yes
                </Radiobtns>
              </div>
              <div className="radiobtnSpace">
                <Radiobtns
                  type="radio"
                  name="discord"
                  id="no"
                  changeValue={setDiscord}
                >
                  No
                </Radiobtns>
              </div>
            </div>
            {/* ------------------------------------------------------------Another Skills???---------------------------------------------------------------------------- */}
            <div className="padding">
              <div className="Language">
                Specific skills you'd like to specify that could help (eg. Tech,
                Content Writing, Design etc)
              </div>
              <div className="Width">
                <InputFields
                  placeholder="NILL"
                  id="otherSkils"
                  changeValue={setSkills}
                ></InputFields>
              </div>
            </div>
            {/*---------------------------------------------------------------------------- Submit btn---------------------------------------------------------------------------- */}
            {name.length > 0 &&
            location.length > 0 &&
            district.length > 0 &&
            communication.length > 0 &&
            phone.length > 0 &&
            volDay.length > 0 &&
            work.length > 0 &&
            discord.length > 0 ? (
              <button className="button" id="open-button" onClick={clicked}>
                <span style={{ color: "white" }}>Submit</span>
              </button>
            ) : (
              ""
            )}
            <ThankYou clicked={clickedBtn} />
          </div>
        </div>
        <div className="warning">
          <div className="required-fields ">
            The Submit button will appear once you enter all the required fields
            only.
          </div>
          <div>
            Never submit passwords or any other personal details that aren't
            asked.
          </div>
        </div>
      </div>
    </div>
  );
};

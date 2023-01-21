import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Waitlist from "../src/components/Waitlist";
import SuccessAlert from "../src/components/SuccessAlert";
import LandingLayout from "../src/layouts/LandingLayout";
import NavigationBar from "../src/components/NavigationBar";

export default function Faq() {
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = () => {
    setOpenAlert(true);
  };

  const closeAlert = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    if (openAlert === true) {
      document.body.style.overflow = "hidden";
    } else if (openAlert === false) {
      document.body.style.overflow = "unset";
    }
  }, [openAlert]);

  const AccordionIteration = [
    {
      id: 1,
      header:
        "Do I need to pay to Instapay even when there is no transaction going on in my business?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
    {
      id: 2,
      header: "What platforms does Instapay payment gateway support?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
    {
      id: 3,
      header: "What platforms does Instapay payment gateway support?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
    {
      id: 4,
      header: "What platforms does Instapay payment gateway support?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
    {
      id: 5,
      header: "What platforms does Instapay payment gateway support?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
    {
      id: 6,
      header: "What platforms does Instapay payment gateway support?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
    {
      id: 7,
      header: "What platforms does Instapay payment gateway support?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
    {
      id: 8,
      header: "What platforms does Instapay payment gateway support?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
    {
      id: 9,
      header: "What platforms does Instapay payment gateway support?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
    {
      id: 10,
      header: "What platforms does Instapay payment gateway support?",
      title: "What is a Payment Gateway?",
      paraone:
        "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
      paratwo:
        "Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.",
    },
  ];

  const [currentActiveKey, setCurrentActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.1rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiAccordionSummary-root[aria-expanded="true"]': {
      backgroundColor: "#FAFBFF",
    },
    flexDirection: "reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(270deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const accordionHeader = {
    display: "flex",
    padding: "10px 120px 10px 0",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
  };

  const accordionBody = {
    backgroundColor: "#FAFBFF",
    padding: "20px",
  };

  const H1 = {
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "28px",
    padding: "0 100px 0 0",
  };

  const P = {
    padding: "10px 70px 0 0",
    fontWeight: "300",
    fontSize: "16px",
    lineHeight: "24px",
  };

  const SearchForm = {
    width: "100%",
    height: "64px",
    background: "#F3F3F3",
    border: "1px solid #DEDEDE",
    borderRadius: "12px",
    padding: "10px",
    display: "flex",
    margin: "40px auto 50px",
    alignItems: "center",
  };

  const DesktopSearchForm = {
    width: "50%",
    height: "64px",
    background: "#F3F3F3",
    border: "1px solid #DEDEDE",
    borderRadius: "12px",
    padding: "10px",
    display: "flex",
    margin: "40px auto 50px",
    alignItems: "center",
  };

  const MobileSearchInput = {
    width: "100%",
    background: "transparent",
    padding: "10px",
    outline: "none",
    border: "none",
    fontWeight: "300",
    fontSize: "14px",
  };

  const Search = {
    display: "block",
  };

  return (
    <LandingLayout
      title="Welcome to CarPadi landing page"
      navbar={
        <NavigationBar active="Buy car"/>
      }
    >
      <div style={{ margin: "100px 40px 50px" }} className="d-block d-lg-none">
        <h1
          style={{
            fontWeight: "600",
            fontSize: "32px",
            lineHeight: "37px",
            textAlign: "center",
          }}
        >
          Frequently
          <br />
          Asked Questions
        </h1>

        <form style={SearchForm}>
          <input
            type="text"
            name="search"
            style={MobileSearchInput}
            placeholder="Search for a question"
          />
          <div style={Search}>
            <img
              src="https://res.cloudinary.com/grootretro/image/upload/v1646244427/carpadi-website/search_icon_y3bxtz.png"
              alt="search icon"
            />
          </div>
        </form>
        <div>
          {AccordionIteration.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharpIcon style={{ width: "18px" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                eventKey={item.id}
                style={
                  currentActiveKey === item.id
                    ? { backgroundColor: "#FAFBFF" }
                    : null
                }
                onClick={() => {
                  toggleActiveKey(item.id);
                }}
              >
                <Typography style={accordionHeader}>
                  <div>
                    <img
                      style={{ marginRight: "10px" }}
                      src={
                        currentActiveKey === item.id
                          ? "https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/accordion-open-circle_o5oinf.png"
                          : "https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/accordion-close-circle_ge9cwl.png"
                      }
                      alt="blue circle"
                    />
                  </div>
                  {item.header}
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: "0" }}>
                <Typography style={accordionBody}>
                  <h1 style={H1}>{item.title}</h1>
                  <p style={P}>{item.paraone}</p>
                  <p style={P}>{item.paratwo}</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <Waitlist handleClick={handleClick} />

        <div style={{ display: `${openAlert === false ? "none" : "block"}` }}>
          <SuccessAlert closeAlert={closeAlert} />
        </div>
      </div>

      {/* for Desktop */}
      <div style={{ margin: "200px 40px 50px" }} className="d-none d-lg-block">
        <h1
          style={{
            fontWeight: "6900",
            fontSize: "56px",
            lineHeight: "66px",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h1>

        <form style={DesktopSearchForm}>
          <input
            type="text"
            name="search"
            style={MobileSearchInput}
            placeholder="Search for a question"
          />
          <div style={Search}>
            <img
              src="https://res.cloudinary.com/grootretro/image/upload/v1646752882/carpadi-website/search_icon_pgeaby.png"
              alt="search icon"
            />
          </div>
        </form>
        <div>
          {AccordionIteration.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharpIcon style={{ width: "18px" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                eventKey={item.id}
                style={
                  currentActiveKey === item.id
                    ? { backgroundColor: "#FAFBFF" }
                    : null
                }
                onClick={() => {
                  toggleActiveKey(item.id);
                }}
              >
                <Typography style={accordionHeader}>
                  <div>
                    <img
                      style={{ marginRight: "10px" }}
                      src={
                        currentActiveKey === item.id
                          ? "https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/accordion-open-circle_o5oinf.png"
                          : "https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/accordion-close-circle_ge9cwl.png"
                      }
                      alt="blue circle"
                    />
                  </div>
                  {item.header}
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: "0" }}>
                <Typography style={accordionBody}>
                  <h1 style={H1}>{item.title}</h1>
                  <p style={P}>{item.paraone}</p>
                  <p style={P}>{item.paratwo}</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <Waitlist handleClick={handleClick} />

        <div style={{ display: `${openAlert === false ? "none" : "block"}` }}>
          <SuccessAlert closeAlert={closeAlert} />
        </div>
      </div>
    </LandingLayout>

  );
}

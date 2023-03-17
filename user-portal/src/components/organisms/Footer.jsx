import React from "react";
import FooterItem from "../molecules/FooterItems";

export default function Footer(props) {
  const { className } = props;

  return (
    <footer className={className}>
      <div className="w-75 my-5 mx-auto justify-content-around footer-container">
        <FooterItem
          itemName="About"
          content={[
            { aText: "Contact Us", href: "#" },
            { aText: "About Us", href: "#" },
            { aText: "Careers", href: "#" },
            { aText: "Better Buy's Stories", href: "#" },
            { aText: "Corporate Information", href: "#" },
          ]}
        />

        <FooterItem
          itemName="Top Categories"
          content={[
            { aText: "Men", href: "#" },
            { aText: "Women", href: "#" },
            { aText: "Kids", href: "#" },
            { aText: "Electronics", href: "#" },
            { aText: "Sports Books & More", href: "#" },
            { aText: "Home & Furniture", href: "#" },
            { aText: "Grocery", href: "#" },
          ]}
        />

        <FooterItem
          itemName="Help"
          content={[
            { aText: "Payment", href: "#" },
            { aText: "Shipping", href: "#" },
            { aText: "FAQ", href: "#" },
            { aText: "Cancellation & return", href: "#" },
            { aText: "Customer Care", href: "#" },
            { aText: "Track Your Order", href: "#" },
          ]}
        />

        <FooterItem
          itemName="Connect With Us"
          content={[
            { aText: "Facebook", href: "#" },
            { aText: "Instagram", href: "#" },
            { aText: "Twitter", href: "#" },
          ]}
        />
      </div>
    </footer>
  );
}
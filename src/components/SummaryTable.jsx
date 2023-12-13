import { Typography, Link, Box } from "@mui/material";

const SummaryTable = ({
  isYearly,
  title,
  price,
  addOns,
  totalPrice,
  onClick,
}) => {
  const { monthly, yearly } = price;

  const calcItemPrice = () => {
    const price = isYearly ? yearly : monthly;
    const planPrice = price[title];
    const pricePeriod = isYearly ? "yr" : "mo";
    return `$${planPrice}/${pricePeriod}`;
  };
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#F8F9FF",
          borderRadius: "8px",
          paddingX: "24px",
          paddingTop: "16px",
          pb: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#022959",
                fontFamily: "Ubuntu",
                fontSize: "16px",
                fontWeight: 700,
                textTransform: "capitalize",
              }}
            >
              {`${title} (${isYearly ? "Yearly" : "Monthly"})`}
            </Typography>
            <Link
              onClick={onClick}
              underline="none"
              sx={{
                color: "#9699AA",
                fontFamily: "Ubuntu",
                fontSize: "14px",
                fontWeight: 400,
                textDecorationLine: "underline",
                cursor: "pointer",
              }}
            >
              Change
            </Link>
          </Box>
          <Typography
            sx={{
              color: "#022959",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            {calcItemPrice()}
          </Typography>
        </Box>
        <hr
          style={{ backgroundColor: "#9699AA", height: "1px", width: "402px" }}
        />

        {addOns.map((addOn) => {
          const { id, title, price, isChecked } = addOn;
          const getPrice = () => {
            if (isYearly) return `$${price.yearly}/yr`;
            return `$${price.monthly}/mo`;
          };
          if (isChecked)
            return (
              <Box
                key={id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "16px",
                }}
              >
                <Typography
                  sx={{
                    color: "#9699AA",
                    fontFamily: "Ubuntu",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    color: "#022959",
                    fontFamily: "Ubuntu",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {getPrice()}
                </Typography>
              </Box>
            );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "25px",
        }}
      >
        <Typography
          sx={{
            color: "#9699AA",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          Total (per {`${isYearly ? "year" : "month"}`})
        </Typography>
        <Typography
          sx={{
            color: "#483EFF",
            fontFamily: "Ubuntu",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          {`+$${totalPrice}/${isYearly ? "yr" : "mo"}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default SummaryTable;

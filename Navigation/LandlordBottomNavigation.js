import React from "react";
import { BottomNavigation, BottomNavigationTab, Icon, Text } from "@ui-kitten/components";

const homeIcon = (props) => <Icon {...props} name="home-outline" />;
const taxIcon = (props) => <Icon {...props} name="credit-card-outline" />;
const appIcon = (props) => <Icon {...props} name="file-text-outline" />;
const memberIcon = (props) => <Icon {...props} name="people-outline" />;

const LandlordBottomNavigation = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      indicatorStyle={{ backgroundColor: "#e68f29" }}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab icon={homeIcon} title={() => <Text category="label">Home</Text>} />
      <BottomNavigationTab icon={taxIcon} title={() => <Text category="label">Payment</Text>} />
      <BottomNavigationTab icon={appIcon} title={() => <Text category="label">Applications</Text>} />
      <BottomNavigationTab icon={memberIcon} title={() => <Text category="label">On Duty</Text>} />
    </BottomNavigation>
  );
};

export default LandlordBottomNavigation;

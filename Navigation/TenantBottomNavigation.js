import React from "react";
import { BottomNavigation, BottomNavigationTab, Icon, Text } from "@ui-kitten/components";

const homeIcon = (props) => <Icon {...props} name="home-outline" />;
const taxIcon = (props) => <Icon {...props} name="credit-card-outline" />;
const appIcon = (props) => <Icon {...props} name="file-text-outline" />;
const memberIcon = (props) => <Icon {...props} name="people-outline" />;

const TenantBottomNavigation = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      indicatorStyle={{ backgroundColor: "#e68f29" }}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab icon={homeIcon} title={() => <Text category="label">Home</Text>} />
      <BottomNavigationTab icon={taxIcon} title={() => <Text category="label">Payment History</Text>} />
      <BottomNavigationTab icon={appIcon} title={() => <Text category="label">QR Code</Text>} />
      <BottomNavigationTab icon={memberIcon} title={() => <Text category="label">Profile</Text>} />
    </BottomNavigation>
  );
};

export default TenantBottomNavigation;

import { SettingsIcon } from '@assets';
import { Box, HStack, Menu, VStack } from '@chakra-ui/react';
import { MenuListComponent, TopBarButton } from '@components';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { t } = useTranslation();
  return (
    <Menu>
      <TopBarButton
        text=""
        onClick={() => {}}
        ariaLabel="settings-top-bar-button"
        icon={<SettingsIcon width="1.5em" height="1.5em" color="white" />}
      />
      <MenuListComponent>
        <Box display={'flex'}>
          <Box
            display={'flex'}
            width={'100%'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            py={2}
          >
            <HStack>
              <VStack></VStack>
            </HStack>
          </Box>
        </Box>
      </MenuListComponent>
    </Menu>
  );
};

export default Settings;

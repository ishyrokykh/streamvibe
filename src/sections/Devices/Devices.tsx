import './Devices.scss';
import Section from "@/layouts/Section";
import DeviceCard from "@/components/DeviceCard";
import Grid from "@/components/Grid";

import smartphoneSrc from '@/assets/images/devices/smartphone.svg'
import tabletSrc from '@/assets/images/devices/tablet.svg'
import smarttvSrc from '@/assets/images/devices/smarttv.svg'
import laptopSrc from '@/assets/images/devices/laptop.svg'
import gamingconsoleSrc from '@/assets/images/devices/gamingconsole.svg'
import vrheadsetSrc from '@/assets/images/devices/vrheadset.svg'

type TDeviceItem = {
    title: string;
    description: string;
    imgSrc: string;
}

const Devices = () => {
    const deviceItems: TDeviceItem[] = [
        {
            title: "Smartphones",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: smartphoneSrc,
        },
        {
            title: "Tablet",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: tabletSrc,
        },
        {
            title: "Smart TV",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: smarttvSrc,
        },
        {
            title: "Laptops",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: laptopSrc,
        },
        {
            title: "Gaming Consoles",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: gamingconsoleSrc,
        },
        {
            title: "VR Headsets",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc: vrheadsetSrc,
        }
    ];

    return (
        <Section
            titleId="devices-title"
            title="We Provide you streaming experience across various devices."
            description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        >
            <Grid columns={3}>
                {deviceItems.map((device, index) => (
                    <DeviceCard key={index} title={device.title} description={device.description} imgSrc={device.imgSrc} />
                ))}
            </Grid>
        </Section>
    );
}

export default Devices
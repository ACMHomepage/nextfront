interface FlexProps {
  flex?: number;
}

const Flex = (props: FlexProps) => {
  const { flex = 1 } = props;

  return <div style={{ flex }} />;
};

export default Flex;
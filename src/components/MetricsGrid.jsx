export function MetricsGrid() {
  const metrics = [
    {
      value: "$10M+",
      label: "Revenue influenced",
      description: "Across all projects supported by design decisions",
      color: "#06b6d4", // cyan
      bgColor: "rgba(22, 78, 99, 0.3)" // dark cyan background
    },
    {
      value: "20%",
      label: "Conversion Increase",
      description: "Strawberry.me homepage redesign",
      color: "#f97316", // orange
      bgColor: "rgba(120, 53, 15, 0.3)" // dark orange background
    },
    {
      value: "200%",
      label: "Increased user retention",
      description: "EchoKids dashboard redesign",
      color: "#eab308", // yellow
      bgColor: "rgba(133, 77, 14, 0.3)" // dark yellow background
    },
    {
      value: "33%",
      label: "More efficient user flow",
      description: "BetterHelp video session test redesign",
      color: "#a855f7", // purple
      bgColor: "rgba(88, 28, 135, 0.3)" // dark purple background
    },
    {
      value: "3+",
      label: "Design systems",
      description: "Some contributed to and some built from scratch",
      color: "#ef4444", // red
      bgColor: "rgba(127, 29, 29, 0.3)" // dark red background
    },
    {
      value: "50+",
      label: "User interviews conducted",
      description: "Across all projects",
      color: "#f97316", // orange
      bgColor: "rgba(120, 53, 15, 0.3)" // dark orange background
    }
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '20px',
    padding: '20px'
  };

  const cardStyle = {
    padding: '32px 24px',
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    minHeight: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const valueStyle = {
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '16px',
    lineHeight: '1'
  };

  const labelStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#ffffff',
    lineHeight: '1.3'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: '1.4',
    opacity: 0.8
  };

  return (
    <div style={gridStyle}>
      {metrics.map((metric, index) => (
          <div key={index} 
            style={{
              ...cardStyle,
              backgroundColor: metric.bgColor
            }}
          >
            <div style={valueStyle}>
              <span style={{ color: metric.color }}>
                {metric.value}
              </span>
            </div>
            <div>
              <h3 style={labelStyle}>
                {metric.label}
              </h3>
              <p style={descriptionStyle}>
                {metric.description}
              </p>
            </div>
          </div>
      ))}
    </div>
  );
}
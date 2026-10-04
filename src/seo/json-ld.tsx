type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

type JsonLdProps = {
  data: JsonLdValue[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <>
      {data.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item),
          }}
        />
      ))}
    </>
  );
}

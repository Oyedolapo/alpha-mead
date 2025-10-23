import React from "react";

const CaseDetailLayout = ({
  title,
  clientName,
  period,
  image,
  contentHead,
  fmScope,
  keyAchievements,
  backPath,
  navigate,
  keyComponent,
  targets,
  scopeText
}) => {
  return (
    <main className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
      <div className="flex justify-end mb-10">
        <button
          onClick={() => navigate(backPath)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-xl text-sm font-medium transition"
        >
          ← Back
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        <div className="lg:w-1/2 space-y-6">
          {clientName && (
            <h2 className="text-2xl font-bold text-green-700">
              Client: <span className="text-gray-800">{clientName}</span>
            </h2>
          )}
          {period && <p className="text-gray-600 italic">Period: {period}</p>}

          {contentHead && (
            <p className="text-gray-700 leading-relaxed">{contentHead}</p>
          )}

          {targets && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Target
              </h3>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed whitespace-pre-line">
                {targets
                  .split("\n")
                  .filter(Boolean)
                  .map((line, i) => (
                    <li key={i}>{line.replace("-", "").trim()}</li>
                  ))}
              </ol>
            </div>
          )}

          {keyComponent && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Key components of the scheme
              </h3>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed whitespace-pre-line">
                {keyComponent
                  .split("\n")
                  .filter(Boolean)
                  .map((line, i) => (
                    <li key={i}>{line.replace("-", "").trim()}</li>
                  ))}
              </ol>
            </div>
          )}

          {fmScope && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {scopeText ? "Service Scope" : "Scope of FM Services"}
              </h3>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed whitespace-pre-line">
                {fmScope
                  .split("\n")
                  .filter(Boolean)
                  .map((line, i) => (
                  <li key={i}>{line.replace("-", "").trim()}</li>
                ))}
              </ol>
            </div>
          )}

          {keyAchievements && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Key Achievements
              </h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed whitespace-pre-line">
                {keyAchievements
                  .split("\n")
                  .filter(Boolean)
                  .map((line, i) => (
                    <li key={i}>{line.replace("-", "").trim()}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CaseDetailLayout;

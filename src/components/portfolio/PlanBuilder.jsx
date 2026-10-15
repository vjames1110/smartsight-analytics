import { useMemo, useState } from "react";
import "./PlanBuilder.css";
import { whatsappLink, trackEvent } from "../../config/site";

const allOptional = (groups) =>
  groups.filter((g) => !g.core).flatMap((g) => g.modules.map((m) => m.name));

const presetModules = (preset, groups) =>
  preset.modules === "all" ? allOptional(groups) : preset.modules;

// Lets a visitor tick the modules they need. Plans follow the modules chosen,
// so the output is a quote request listing exactly those modules.
function PlanBuilder({ product }) {
  const { moduleGroups: groups, presets } = product;
  const [presetName, setPresetName] = useState(presets[0].name);
  const [selected, setSelected] = useState(
    () => new Set(presetModules(presets[0], groups))
  );

  const coreCount = groups
    .filter((g) => g.core)
    .reduce((n, g) => n + g.modules.length, 0);
  const totalOptional = useMemo(() => allOptional(groups).length, [groups]);

  const applyPreset = (preset) => {
    setPresetName(preset.name);
    setSelected(new Set(presetModules(preset, groups)));
  };

  const toggle = (name) => {
    setPresetName("Custom");
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const chosen = allOptional(groups).filter((m) => selected.has(m));
  const message = `Hi, I am interested in ${product.name}.
Plan: ${presetName}
Modules (${chosen.length}): ${chosen.join(", ") || "core platform only"}
Please share a quote and a demo.`;

  return (
    <div className="plan">
      <h4 className="pm-sub">Build your plan</h4>
      <p className="plan-intro">{product.editionNote}</p>

      <div className="plan-presets" role="group" aria-label="Start from a preset">
        {presets.map((preset) => (
          <button
            key={preset.name}
            type="button"
            className={presetName === preset.name ? "active" : ""}
            aria-pressed={presetName === preset.name}
            onClick={() => applyPreset(preset)}
          >
            {preset.name}
          </button>
        ))}
        {presetName === "Custom" && (
          <span className="plan-custom">Custom selection</span>
        )}
      </div>

      <div className="plan-groups">
        {groups.map((group) => (
          <fieldset key={group.title} className="plan-group">
            <legend>
              {group.title}
              {group.core && <em>Always included</em>}
            </legend>
            {group.modules.map((m) => {
              const checked = group.core || selected.has(m.name);
              return (
                <label key={m.name} className={checked ? "on" : ""}>
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={group.core}
                    onChange={() => toggle(m.name)}
                  />
                  <span>
                    <b>{m.name}</b>
                    <small>{m.desc}</small>
                  </span>
                </label>
              );
            })}
          </fieldset>
        ))}
      </div>

      <div className="plan-summary">
        <div>
          <strong>
            {chosen.length} of {totalOptional} modules
          </strong>{" "}
          selected, plus {coreCount} core platform features.
          <small>
            Final pricing depends on modules, users and sites. No fixed price is
            shown here.
          </small>
        </div>
        <a
          className="btn btn-wa"
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackEvent("plan_quote_request", {
              product: product.name,
              plan: presetName,
              modules: chosen.length,
            })
          }
        >
          Request a quote for this plan
        </a>
      </div>
    </div>
  );
}

export default PlanBuilder;
